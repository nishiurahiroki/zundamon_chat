import IndexPage from '../components/pages/IndexPage';

type Props = { 
  searchParams: { question: string; };
  headers : {
    host : string;
  }
}

async function getAnswer(question : string) {
  const params = {
    question
  }

  const queryParams = new URLSearchParams(params); 
  const response = await fetch(`${process.env.API_HOST}/api/question?${queryParams}`)
  const json = await response.json()

  return json.answer.content
}

export default async function Page(props: Props) {
  const answer = props.searchParams.question 
                  ? await getAnswer(props.searchParams.question) : ''

  return (
    <>
      <IndexPage />
      <div>{answer}</div>
    </>
  )
}