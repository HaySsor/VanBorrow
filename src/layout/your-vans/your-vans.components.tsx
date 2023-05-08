import {useEffect, useState} from 'react';
import styled from './your-vans.module.scss';
import type {VanType} from '../../types/vanType';
import {useFetch} from '../../hooks/useFetch';
import {YourVansItem} from '../../components/your-vans-item/your-vans-item.component';
import {useLoaderData} from 'react-router-dom';
import {requireAuth} from '../../utils/requireAuth';
import {redirect} from '../../utils/mutateResponse';

const API_LINK = '/api/host/your-vans';

const fetchData = async () => {
  const [getData] = useFetch();
  const vansData = await getData<{vans: VanType[]}>(API_LINK);
  return vansData.vans;
};

export const loader = async () => {
  try {
    const x = await requireAuth();
    if (x?.status === 302) {
      throw redirect('/login');
    }
    console.log(x);
    return await fetchData();
  } catch (err) {
    const x = await requireAuth();
    if (x?.status === 302) {
      throw redirect('/login');
    }
    console.log(x);
    return await fetchData();
  }
};

export const YourVans = () => {
  const vansList = useLoaderData() as VanType[];

  return (
    <div className={styled.yourVans}>
      {vansList.length !== 0 ? (
        vansList.map((van) => <YourVansItem van={van} key={van.id} />)
      ) : (
        <h3>Empty list</h3>
      )}
    </div>
  );
};
