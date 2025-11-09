
import { Avatar } from '@mantine/core';
import { BiTrophy } from 'react-icons/bi';

function Trophies() {

    return (
        <>
            <span className="trophies-title"> <BiTrophy /> User Trophies</span>

            <Avatar.Group>
                <Avatar style={{ height: '40px', width: '40px' }} />
                <Avatar style={{ height: '40px', width: '40px' }} />
                <Avatar style={{ height: '40px', width: '40px' }} />
                <Avatar style={{ height: '40px', width: '40px' }} />
                <Avatar style={{ height: '40px', width: '40px' }} />
                <Avatar style={{ height: '40px', width: '40px' }}>+5</Avatar>
            </Avatar.Group>
        </>
    )
}

export default Trophies;