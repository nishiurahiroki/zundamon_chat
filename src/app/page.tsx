import IndexPage from '../components/pages/IndexPage';
import { headers } from 'next/headers';

type Props = { 
  searchParams: { question: string; };
  headers : {
    host : string;
  }
}

async function getAnswer(question : string, host : string) {
  const params = {
    question
  }

  const queryParams = new URLSearchParams(params); 
  const response = await fetch(`http://${host}/api/question?${queryParams}`)
  const json = await response.json()

  return json.answer.content
}

export default async function Page(props: Props) {
  const headersList = headers();

  const answer = props.searchParams.question 
                  ? await getAnswer(props.searchParams.question, headersList.get('host')) : ''

  return (
    <>
      <IndexPage />
      <div>{answer}</div>
    </>
  )
}