import { RadarChart } from '@mantine/charts';

function TopGenres() {

    const data = [

        {
            genre: 'Pop',
            streams: '8',
        },

        {
            genre: 'Rock',
            streams: '10',
        },

        {
            genre: 'Rap',
            streams: '12',
        },

        {
            genre: 'EDM',
            streams: '13',
        },

        {
            genre: 'Jazz',
            streams: '8',
        },

        {
            genre: 'Lo-Fi',
            streams: '9',
        },

        {
            genre: 'Classical',
            streams: '2',
        },
    ]

    return (
        <section className="Posts-widget">
            <span> Your Top Genres </span>

            <RadarChart
                h={220}
                data={data}
                dataKey="genre"
                withPolarRadiusAxis
                series={[{ name: 'streams', color: 'green.6', opacity: 0.2 }]}
            />

        </section>
    )
}

export default TopGenres;