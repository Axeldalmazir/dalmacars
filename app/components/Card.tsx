import Image from 'next/image';
import { FaGasPump } from 'react-icons/fa';
import { GiSteeringWheel } from 'react-icons/gi';
import { FaCar } from 'react-icons/fa';
import { FaUser } from 'react-icons/fa';
import { useState, useEffect } from 'react';

const Card = (props: any) => {
	const [car, setCar] = useState<any>();

	useEffect(() => {
		if (props.car) {
			setCar(props.car);
		}
	}, [props.car]);

	return (
		car && (
			<div className="border-4 border-white hover:border-gray-500 rounded-xl p-1">
				<div className="relative bg-gradient-to-b from-[#1a1a1a] via-gray-500 to-[#1a1a1a] border shadow-md gap-2 flex flex-col justify-between rounded-xl cursor-pointer text-[#fff] p-5">
					<h2 className="font-bold text-[20px]">{car?.name}</h2>
					<p className="absolute top-0 right-2 flex items-center gap-1 my-3 p-2 rounded-md font-bold text-[10px] bg-[#ff5f00]">
						<GiSteeringWheel className="text-[20px]" />
						<span>{car?.gearBox}</span>
					</p>

					<div className="flex items-center gap-2">
						<p className="bg-gray-300 text-gray-700 p-2 rounded-md flex items-center gap-1 text-[12px]">
							<FaUser className="text-[20px]" />
							<span>{car?.seats}</span>
						</p>
						<p className="bg-gray-300 text-gray-700 p-2 rounded-md flex items-center gap-1 text-[12px]">
							<FaGasPump className="text-[20px]" />
							<span>{car?.fuel}</span>
						</p>
						<p className="bg-gray-300 text-gray-700 p-2 rounded-md flex items-center gap-1 text-[12px]">
							<FaCar className="text-[20px]" />
							<span>{car?.brand}</span>
						</p>
					</div>

					<Image
						src={car?.image?.url}
						alt={car.name}
						width={260}
						height={150}
						className="w-full object-cover self-center"
					/>
					<p className="text-[12px]">✔️ incl. 500km </p>

					<p>
						<span className="text-[26px] font-bold">{car?.price}€ </span>
						<span className="text-[12px]">/ per day</span>
					</p>
				</div>
			</div>
		)
	);
};

export default Card;
