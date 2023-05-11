import {Suspense, useEffect, useState} from 'react';
import styled from './your-vans.module.scss';
import type {VanType} from '../../types/vanType';
import {useFetch} from '../../hooks/useFetch';
import {YourVansItem} from '../../components/your-vans-item/your-vans-item.component';
import {useLoaderData, defer, Await} from 'react-router-dom';
import {requireAuth} from '../../utils/requireAuth';
import {fetchVans} from '../../utils/fetchVans';

const API_LINK = '/api/host/your-vans';

export const loader = async ({request}: {request: Request}) => {
  await requireAuth(request);
  return defer({vans: fetchVans(API_LINK)});
};

export const YourVans = () => {
  const vansList = useLoaderData() as {vans: Promise<VanType[]>};

  return (
    <div className={styled.yourVans}>
      <Suspense fallback={<h2>Loading...</h2>}>
        <Await resolve={vansList.vans}>
          {(vansList: VanType[]) => {
            return (
              <>
                {vansList.length !== 0 ? (
                  vansList.map((van) => <YourVansItem van={van} key={van.id} />)
                ) : (
                  <h3>Empty list</h3>
                )}
              </>
            );
          }}
        </Await>
      </Suspense>
    </div>
  );
};
{
}
