import { BarChart } from '@mantine/charts';

function MonthlyActivity() {

    const data = [

        { month: 'Janurary', Songs: 50 },
        { month: 'Feburary', Songs: 6 },
        { month: 'March', Songs: 5 },
        { month: 'April', Songs: 12 },
        { month: 'May', Songs: 50 },
        { month: 'June', Songs: 13 },
        { month: 'July', Songs: 20 },
        { month: 'August', Songs: 0 },
        { month: 'September', Songs: 42 },
        { month: 'October', Songs: 6 },
        { month: 'November', Songs: 3 },
        { month: 'December', Songs: 62 },
    ]

    return (
        <section className="monthly-activity">

            <span id="component-heading">  Monthly Activity </span>

            <div className="monthly-activity-graph">

                <BarChart
                    h={180}
                    data={data}
                    dataKey="month"
                    yAxisProps={{ width: 40 }}
                    barProps={{ radius: 4 }}
                    series={[{ name: 'Songs', color: 'green.7' }]}
                    tickLine="x"
                />
            </div>

        </section>
    )
}

export default MonthlyActivity;