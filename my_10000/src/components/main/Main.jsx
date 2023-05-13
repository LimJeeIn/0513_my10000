import React, { useState } from 'react';
import './Main.css';

export default function Main(props) {
  const [expert, setExpert] = useState('');
  const [training, setTraining] = useState(0);
  const [dday, setDday] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    setDday(Math.ceil(10000 / training));
  };

  return (
    <main>
      <h2 className='a11y'>필요한 시간 알아보기</h2>
      <form className='cont-input' onSubmit={handleSubmit}>
        <p>
          나는
          <input
            type='text'
            required
            value={expert}
            onChange={(event) => setExpert(event.target.value)}
          />
          전문가가 될 것이다.
        </p>
        <p className='txt-time'>
          그래서 앞으포 매일 하루에
          <input
            type='number'
            required
            value={training}
            onChange={(event) => setTraining(event.target.value)}
          />
          시간씩 훈련 할 것이다.
        </p>
        <button type='submit' className='btn-exc'>
          나는 며칠동안 훈련을 해야 1만 시간이 될까?
        </button>
      </form>

      {!!dday && (
        <section className='cont-result'>
          <h3 className='a11y'>결과확인</h3>
          <p className='txt-wannabe'>
            당신은 <strong>{training}</strong>가 되기 위해서
            <br />
            대략 <strong>{dday}</strong> 이상 훈련 하셔야 합니다! :&#41;
          </p>
          <button type='button' className='btn-go' onClick={props.modalOpen}>
            훈련 하러가기 GO!GO!
          </button>
          <button type='button' className='btn-share'>
            공유하기
          </button>
        </section>
      )}
    </main>
  );
}
