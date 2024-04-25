'use client'

import { createClient } from '@/utils/supabase/client'
import { useEffect, useState } from 'react'

export default function Page() {
  const [todo, setTodo] = useState<any[] | null>(null)
  const supabase = createClient()

  useEffect(() => {
    const getData = async () => {
      const { data } = await supabase.from('ToDo').select()
      setTodo(data)
    }
    getData()
  }, [])

  return <pre>{JSON.stringify(todo, null, 2)}</pre>
}