import React from "react";
import Chart from "react-apexcharts";

const CategoryPie = (props) => {
    console.log("hi",props.makeup.length)
    const makeupLength= props.makeup.length
    const skincareLength= props.skincare.length
    const subscriptionsLength= props.subscriptions.length

    const state = {

        series: [makeupLength, skincareLength, subscriptionsLength],
        options: {
            chart: {
                width: 380,
                type: 'pie',
            },
            labels: ['Makeup', 'Skincare', 'Subscriptions'],
            title: {
                text: 'Purchases',
                align: 'left',
                margin: 10,
                offsetX: 85,
                offsetY: 0,
                floating: false
            },
            colors: ['#93C3EE', '#E5C6A0', '#a3b18a'],
            fill: ['#93C3EE', '#E5C6A0', '#a3b18a'],
            stroke: {
                width: 4
            },
            dataLabels: {
                enabled: true,
                style: {
                    colors: ['#111']
                },
                distributed:false,
                background: {
                    enabled: true,
                    foreColor: '#fff',
                    borderWidth: 0
                }
            },
            responsive: [{
                breakpoint: 480,
                options: {
                    chart: {
                        width: 200
                    },
                    legend: {
                        position: 'center'
                    }
                }
            }]
        },


    };

return (


    <div id="chart">
        <Chart options={state.options} series={state.series} type="pie" width={380} />
    </div>


);
}

export default CategoryPie;