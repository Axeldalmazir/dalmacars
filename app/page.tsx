'use client';
import SloganSection from './components/SloganSection';
import HeaderSection from './components/HeaderSection';
import Devise from './components/Devise';
import GalerieSection from './components/GalerieSection';
import FilterSection from './components/FilterSection';
import Footer from './components/Footer';
import { getCarList } from '@/Services';
import { useState, useEffect } from 'react';

export default function Home() {
	const [carList, setCarList] = useState<any>([]);
	const [carFilter, setCarFilter] = useState<any>([]);

	useEffect(() => {
		getCars();
	}, []);

	const getCars = async () => {
		const result: any = await getCarList();
		setCarList(result.carLists)
    setCarFilter(result.carLists)
	};

  const filterCardList = (brand:string) => {
    const filterList = carFilter.filter((item:any) => item.brand === brand)
      setCarList(filterList)
  }

  const filterPrice = (order: any)=> {
    const data = [...carFilter].sort((a, b)=> order ==-1 ? a.price - b.price : b.price - a.price);
    setCarList(data)
  }

	return (
		<>
			<SloganSection />
			<HeaderSection />
			<Devise />
			<FilterSection carFilter={carFilter} setBrand={(value:string)=>filterCardList(value)}
       orderPrice={(value:string)=>filterPrice(value)}/>
			<GalerieSection carList={carList} />
      <Footer />
		</>
	);
}
