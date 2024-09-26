import React from 'react';
import {
    ComposedChart,
    Line,
    XAxis,
    YAxis,
    Area,
    CartesianGrid,
    Tooltip,
    Legend,
    ResponsiveContainer
} from 'recharts';
import { useSelector } from 'react-redux';
import { forecastState } from 'services/features/ForecastSlice';
import moment from 'moment';
export default function LineGraph() {
    const { forecast } = useSelector(forecastState);

    const formatXAxis = (tickItem) => {
        return moment(tickItem).format('LLL');
    };

    return (
        <ResponsiveContainer width="100%" height={450}>
            <ComposedChart
                width="100%"
                height={300}
                data={forecast || []}
                margin={{
                    top: 5,
                    right: 30,
                    left: 20,
                    bottom: 5
                }}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="datetime" tickFormatter={formatXAxis} tick={{ fontSize: 12 }} />
                <YAxis label={{ value: 'Production (kW)', angle: -90, position: 'left' }} />
                <Tooltip />
                <Legend />

                <Area type="monotone" dataKey="range" fill="orange" stroke="orange" />
                <Area type="monotone" dataKey="production" fill="lightgrey" stroke="grey" />

                <Line
                    isAnimationActive={false}
                    type="monotone"
                    dataKey="predicted"
                    stroke="red"
                    dot={false}
                />
            </ComposedChart>
        </ResponsiveContainer>
    );
}
