import { useMemo } from "react"
import { useGetItemsQuery } from "../services/api"
import Header from "./header"
import ItemList from "./item-list"
import MarkAllAsUnpacked from "./mark-all-as-unpacked"
import NewItem from "./new-item"

const Application = () => {
  const { data, currentData, isLoading, isError, isSuccess, isUninitialized, isFetching } =
    useGetItemsQuery(undefined, {
      pollingInterval: 1500,
    })

  const items = useMemo(() => { 
  if(!data) return [] 

  return data?.items

  }, [data])

  return (
    <main className="flex flex-col gap-8 p-8 mx-auto lg:max-w-4xl">
      <Header count={0} />
      <NewItem />
      <section className="flex flex-col gap-8 md:flex-row">
        <ItemList title="Unpacked Items" items={items} />
        <ItemList title="Packed Items" />
      </section>
      <MarkAllAsUnpacked />
    </main>
  )
}

export default Application
