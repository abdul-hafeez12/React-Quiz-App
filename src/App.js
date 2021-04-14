import React,{useState} from  'react'
import Card from  'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Option from './Option';
import QuizData from './questions.json';
import Output from './Output'

function App() {

  const [questions,setQuestions]=useState(QuizData);
  const [count,setCount] =useState(0);
  const [result,setResult]=useState(false);
  const [total,setTotal]=useState(0);

  const totalscore = () =>
  {
    setTotal(questions.map((item)=>item.score).reduce((acc,curent)=>acc+curent));
    
   
  }

  const incrementcount = () =>
  {
    if(count<4){

      setCount(count+1);
    }
    else{

      totalscore();
      setResult(true);
    }
  }

  const decrementcount = () =>
  {
    if(count>0){

      setCount(count-1);
    }
  }
  return (
    <div>
      <Card>
        <Card.Header className="text-center"><h1>Quiz</h1></Card.Header>
        
        {result ? (
          <Card.Body>
          <h1 className="border-bottom">Total Score:{total}/5</h1>
          { questions.map((element,index)=> <Output w={questions}  y={index}/> ) }
          </Card.Body>
          
        ):(
          <Card.Body>
          <Card.Title>{questions[count].id}. {questions[count].question}</Card.Title>
          <Card.Text>
          <Form.Group>
          {
            Object.values(questions[count].options[0]).map((item) => <Option text={item} w={questions} y={count} />)

          }
          </Form.Group>
          </Card.Text>
          <Button variant="success" className="mr-2" onClick={decrementcount}>Previous</Button>
          <Button variant="success" onClick={incrementcount} >Next</Button>
          </Card.Body>
        )}      
        <Card.Footer className="text-muted">Total Questions: {count+1}/5</Card.Footer>
      </Card>
    </div>
  );
}

export default App;
