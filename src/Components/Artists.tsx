import { BarChart } from '@mantine/charts';

function Communities() {

    const data = [
        { community: 'Artist 1', Songs: 5 },
        { community: 'Artist 2', Songs: 10 },
        { community: 'Artist 3', Songs: 6 },
        { community: 'Artist 4', Songs: 3 },
        { community: 'Artist 5', Songs: 12},
    ]

    return (
        <section className="Communities-widget">
            <span className="component-title"> Top five Artists </span>
            <BarChart
                h={200}
                data={data}
                dataKey="community"
                orientation="horizontal"
                yAxisProps={{ width: 40 }}
                barProps={{ radius: 4 }}
                series={[{  name: 'Songs', color: 'green.6' }]}
            />
        </section>
    )
}

export default Communities;