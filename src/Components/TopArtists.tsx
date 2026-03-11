import { BarChart } from '@mantine/charts';

interface MostStreamedArtistsProps {

    MostStreamedArtists: {

        href?: string;
        items: ItemsArray[];

    }
}

interface ItemsArray {

    genres: string;
    images: imagesArray[] ;

}

interface imagesArray {
    height: number;
    width: number;
    url: string;
}

function Artists({ MostStreamedArtists }: MostStreamedArtistsProps) {


    const data = [
        { artist: '', Songs: 5 },
        { artist: 'Artist 2', Songs: 10 },
        { artist: 'Artist 3', Songs: 6 },
        { artist: 'Artist 4', Songs: 3 },
        { artist: 'Artist 4', Songs: 3 },

    ]

    return (
        <section className="Communities-widget">
            <span id="component-heading"> 🧑‍🎨 Top five Artists </span>


            <img src={MostStreamedArtists?.items[0]?.images[0]?.url}> </img>

            <BarChart
                h={200}
                data={data}
                dataKey="artist"
                orientation="vertical"
                yAxisProps={{ width: 40 }}
                barProps={{ radius: 4 }}
                series={[{ name: 'Songs', color: 'green.7' }]}
            />
        </section>
    )
}

export default Artists;