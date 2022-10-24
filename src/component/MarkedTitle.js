import '../index.css';

export default function MarkedTitle({ text }) {
  return (
    <h2 className='thin pb-40'>
      <mark className='markedText'>{ text }</mark>
    </h2>
  );
}