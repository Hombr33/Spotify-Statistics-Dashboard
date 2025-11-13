import { BarChart } from '@mantine/charts';

function Communities() {


    const data = [
        { community: 'r/TypeScript', Comments: 1200 },
        { community: 'r/NMS', Comments: 1900 },
        { community: 'r/React', Comments: 400 },
        { community: 'r/FrontendDevs', Comments: 1000 },
        { community: '', Comments: 1200 },
    ]

    return (
        <section className="Communities-widget">
            <span className="component-title"> Top Five  </span>
            <BarChart
                h={200}
                data={data}
                dataKey="community"
                orientation="vertical"
                yAxisProps={{ width: 100 }}
                barProps={{ radius: 10 }}
                series={[{  name: 'Comments', color: 'green.6' }]}
            />
        </section>
    )
}

export default Communities;