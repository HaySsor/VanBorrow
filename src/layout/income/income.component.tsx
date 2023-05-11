import styled from './income.module.scss';
import image from '../../assets/images/income-graph.png';

export const Income = () => {
  const transactionsData = [
    {amount: 720, date: "Jan 3, '23", id: '1'},
    {amount: 560, date: "Dec 12, '22", id: '2'},
    {amount: 980, date: "Dec 3, '22", id: '3'},
  ];
  return (
    <section className={styled.HostIncome}>
      <p>
        Last <span>30 days</span>
      </p>
      <h2>$2,260</h2>
      <img className={styled.graph} src={image} alt='Income graph' />
      <div className={styled.infoHeader}>
        <h3>Your transactions (3)</h3>
        <p>
          Last <span>30 days</span>
        </p>
      </div>
      <div className={styled.transactions}>
        {transactionsData.map((item) => (
          <div key={item.id} className={styled.transaction}>
            <h3>${item.amount}</h3>
            <p>{item.date}</p>
          </div>
        ))}
      </div>
    </section>
  );
};
