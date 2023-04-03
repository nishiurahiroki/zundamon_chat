'use client'

import ZundamonSrc from '../../assets/images/zundamon.png'
import Image from 'next/image'

import styles from './index.module.css'
import { useRouter } from 'next/navigation';
import { useState } from 'react';

export type Props = {
}

export default function Index(props : Props) {
  const router = useRouter()

  const [question, setQuestion] = useState<string>('')

  const handleOnChangeQuestion = e => {
    setQuestion(e.target.value)
  }

  const handleOnClickQuestionButton = (question : string) => () => {
    router.push(`?question=${question}`)
  }

  return (
    <div className={styles.container}>
      <div>
        <input type="text" value={question} onChange={handleOnChangeQuestion} />
        <button onClick={handleOnClickQuestionButton(question)}>質問する</button>
      </div>
      <div>
        <Image alt="" width={200} height={320} src={ZundamonSrc} />
      </div>
    </div>
  )
}