import React, { useState } from "react";

const AxisSelector = ({ onSelectAxis, showTonalContext = true }) => {
    const notes = [
        "C", "Db", "D", "Eb", "E", "F",
        "Gb", "G", "Ab", "A", "Bb", "B"
    ];
    const radius = 150; // Circle radius
    const centerX = 200; // SVG center
    const centerY = 200;
    const noteOffset = 20; // Distance of notes from the circle

    const [selectedAxis, setSelectedAxis] = useState();

    const handleAxisClick = (note1Index, note2Index, midAngle) => {
        setSelectedAxis({ note1: notes[note1Index], note2: notes[note2Index], midAngle });

        const axisValue = (note1Index + 0.5) % 12; // Calculate axis value (0.5 to 11.5)
        onSelectAxis(axisValue, notes[note1Index], notes[note2Index]); // Send the axis value to the parent component
    };

    // Calculate Note Position
    const getNotePosition = (index) => {
        const angle = ((index - 3) / 12) * 2 * Math.PI; // Rotate C to the top
        const x = centerX + (radius + noteOffset) * Math.cos(angle);
        const y = centerY + (radius + noteOffset) * Math.sin(angle);
        return { x, y, angle };
    };

    // Calculate Axis Line (Diameter)
    const getAxisLine = (midAngle) => {
        const startX = centerX + radius * Math.cos(midAngle);
        const startY = centerY + radius * Math.sin(midAngle);
        const endX = centerX + radius * Math.cos(midAngle + Math.PI);
        const endY = centerY + radius * Math.sin(midAngle + Math.PI);

        return { startX, startY, endX, endY };
    };

    // Calculate Perpendicular Line
    const getLineCoordinates = (angle, length) => {
        const x1 = centerX + length * Math.cos(angle);
        const y1 = centerY + length * Math.sin(angle);
        const x2 = centerX - length * Math.cos(angle);
        const y2 = centerY - length * Math.sin(angle);
        return { x1, y1, x2, y2 };
    };

    return (
        <svg width="400" height="400">
            {/* Draw Circle */}
            <circle cx={centerX} cy={centerY} r={radius} fill="none" stroke="black" />

            {/* Place Notes */}
            {notes.map((note, index) => {
                const { x, y } = getNotePosition(index);
                return (
                    <text
                        key={note}
                        x={x}
                        y={y}
                        textAnchor="middle"
                        dominantBaseline="middle"
                        alignmentBaseline="middle"
                        fontSize="16" // Increased font size
                        fontWeight="bold"
                        fill={
                            selectedAxis &&
                            (selectedAxis.note1 === note || selectedAxis.note2 === note)
                                ? "blue"
                                : "black"
                        }
                    >
                        {note}
                    </text>
                );
            })}

            {/* Place Selectable Axis Areas */}
            {notes.map((note, index) => {
                const { x: x1, y: y1, angle: angle1 } = getNotePosition(index);
                const { x: x2, y: y2, angle: angle2 } = getNotePosition((index + 1) % 12);

                // Midpoint angle for the axis
                const midAngle = (angle1 + angle2) / 2;

                // Calculate the axis line (true diameter)
                const { startX, startY, endX, endY } = getAxisLine(midAngle);

                return (
                    <g key={`axis-${note}`}>
                        {/* Invisible clickable area */}
                        <circle
                            cx={(x1 + x2) / 2}
                            cy={(y1 + y2) / 2}
                            r={15} // Enlarged selection area
                            fill="transparent"
                            onClick={() =>
                                handleAxisClick(index, (index + 1) % 12, midAngle)
                            }
                            style={{ cursor: "pointer" }}
                        />

                        {/* Draw the selected axis */}
                        {selectedAxis &&
                            selectedAxis.note1 === notes[index] &&
                            selectedAxis.note2 === notes[(index + 1) % 12] && (
                                <line
                                    x1={startX}
                                    y1={startY}
                                    x2={endX}
                                    y2={endY}
                                    stroke="blue"
                                    strokeWidth="2"
                                />
                            )}
                        {/* Tonal Context Axis */}
                        {selectedAxis && showTonalContext && (() => {
                            const { midAngle } = selectedAxis;
                            const perpendicularAngle = midAngle + Math.PI / 2; // Perpendicular angle
                            const { x1, y1, x2, y2 } = getLineCoordinates(perpendicularAngle, radius);
                            return <line 
                                x1={x1}
                                y1={y1} 
                                x2={x2} 
                                y2={y2} 
                                stroke="red" 
                                strokeWidth="2"
                                strokeDasharray="5,5"     
                            />;
                        })()}
                    </g>
                );
            })}
        </svg>
    );
};

export default AxisSelector;