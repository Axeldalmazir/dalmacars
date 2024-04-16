import Logo from '../../public/images/sixt-logo.png';
import Image from 'next/image';
import { UserButton } from '@clerk/nextjs';
import { IoMdMenu } from 'react-icons/io';
import { TbWorld } from 'react-icons/tb';
import { FaCarAlt } from 'react-icons/fa';

const menu = [
	{
		name: 'Manage bookings',
		icon: FaCarAlt,
	},
	{ name: 'EN | CA$', icon: TbWorld },
];

const Nav = () => {
	return (
		<div className="flex justify-between items-center">
			<div className=" flex items-center gap-3">
				<IoMdMenu className="text-2xl text-white cursor-pointer hover:scale-125 transition-all" />
				<Image src={Logo} alt="Logo" width={70} />
			</div>

            <ul className="flex items-center gap-4">
                {menu.map((item, index) => (
                    <li key={index} className="hidden md:flex items-center gap-2 font-bold text-white">
                        <item.icon />
                        <a href="#">{item.name}</a>
                    </li>
                ))}
                <li><UserButton /></li>
            </ul>
		</div>
	);
};

export default Nav;
