//import classes from './Education.module.scss';

const educationList = [
  {
    id: 1,
    name: 'Teste',
    description: 'Teste',
    time: '2012-2014',
  },
  {
    id: 2,
    name: 'Teste 2',
    description: 'Teste 2',
    time: '2015-2018',
  },
];

const Education = () => {
  return (
    <section>
      {educationList.map((item) => (
        <div key={item.id}>
          <p>{item.name}</p>
          <p>{item.description}</p>
          <p>{item.time}</p>
        </div>
      ))}
    </section>
  );
};

export default Education;
