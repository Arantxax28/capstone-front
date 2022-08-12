import React from "react";
import {PieChart, Pie, Tooltip, Label} from "recharts";


const CategoryPie = (props) => {
    // const result = props.products.filter(product => product.category==='Makeup');
    console.log(props.makeup.length)

    const myData = [
        { name: "Makeup", value: props.makeup.length },
        { name: "Skincare", value: props.skincare.length },
        { name: "Subscriptions", value: props.subscriptions.length },
    ];

    return (
        <PieChart width={400} height={400}>
            <Label value="Hello" position="bottom"/>
            <Pie
                dataKey="value"
                isAnimationActive={true}
                data={myData}
                outerRadius={100}
                fill= "#6d6875"
                label={({
                            cx,
                            cy,
                            midAngle,
                            innerRadius,
                            outerRadius,
                            value,
                            index
                        }) => {
                    console.log("handling label?");
                    const RADIAN = Math.PI / 180;
                    const radius = 4 + innerRadius + (outerRadius - innerRadius);
                    const x = cx + radius * Math.cos(-midAngle * RADIAN);
                    const y = cy + radius * Math.sin(-midAngle * RADIAN);

                    return (
                        <text
                            x={x}
                            y={y}
                            fill="#ffff"
                            textAnchor={x > cx ? "start" : "end"}
                            dominantBaseline="central"
                        >
                            {myData[index].name}{value}
                        </text>
                    );
                }}
            />

            <Tooltip />
        </PieChart>
    );
};

export default CategoryPie;