import React, { Component } from "react"
import { Text } from "react-native"
import { LinearGradient } from "expo-linear-gradient"

export class GradientHelper extends Component {
    render() {
        const {
            color1,
            color2,
            start = { x: 0, y: 0 },
            end = { x: 1, y: 1 },
            btnStyle,
            label,
            labelStyle,
            opacity = 1,
        } = this.props

        const r = parseInt(color2.slice(1, 3), 16)
        const g = parseInt(color2.slice(3, 5), 16)
        const b = parseInt(color2.slice(5, 7), 16)

        return (
            <>
                <LinearGradient
                    colors={[color1, `rgba(${r}, ${g}, ${b}, ${opacity})`]}
                    start={start}
                    end={end}
                    style={btnStyle}
                ><Text style={labelStyle}>{label}</Text></LinearGradient>
            </>
        )

    }
}
