import IndexPage from '../components/pages/IndexPage';

type Props = { searchParams: { question: string; }; }

function getAnswer(question : string) {
  // TODO
}

export default function Page(props: Props) {
  // console.log(props.searchParams.question)

  return (
    <IndexPage />
  )
}