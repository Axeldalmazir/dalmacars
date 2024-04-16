import { useState, useEffect } from 'react';

const FilterSection = ({ carFilter, setBrand, orderPrice }: any) => {
	const [brandList, setBrandList] = useState<any>([]);

	const BrandSet = new Set();

	useEffect(() => {
		if (carFilter) {
			handleFilter();
		}
	}, [carFilter]);

	const handleFilter = () => {
		carFilter.forEach((element: any) => {
			BrandSet.add(element.brand);
		});

		setBrandList(Array.from(BrandSet));
	};

	return (
		<div className="flex justify-end gap-3 p-3">
			<select
				onChange={(e) => orderPrice(e.target.value)}
				className="select select-bordered w-full max-w-xs"
			>
				<option disabled selected>
					Sort By
				</option>
				<option value={-1}>Price low to high</option>
				<option value={1}>Price high to low</option>
			</select>

			<select
				onChange={(e) => setBrand(e.target.value)}
				className="select select-bordered w-full max-w-xs"
			>
				<option disabled selected>
					Sort by vehicle type
				</option>
				{brandList.map((item: string, index: number) => (
					<option key={index}>{item}</option>
				))}
			</select>
		</div>
	);
};

export default FilterSection;
