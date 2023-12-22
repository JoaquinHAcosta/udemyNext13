'use client'

import { SimpleWidget } from '..'
import { useAppSelector } from '@/store'
import { IoCartOutline } from 'react-icons/io5'

export const WidgetsGrid = () => {
  const stateValue = useAppSelector((state) => state.counter.count)

  return (
    <div className="flex flex-wrap p-2 items-center justify-center">
      <SimpleWidget
        title={`${stateValue}`}
        subTitle="Productos agregados"
        label="Carrito"
        icon={<IoCartOutline size={70} className="text-blue-600" />}
        href="/dashboard/counter"
      />
      <SimpleWidget title={`${stateValue / 2}`} subTitle={'Mitad'} />
    </div>
  )
}
