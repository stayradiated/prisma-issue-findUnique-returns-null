import { PrismaClient } from "@prisma/client"

const prisma = new PrismaClient()

const main = async () => {
  // delete any existing records in this table
  await prisma.modelWithUniqueDate.deleteMany({where: {} })

  await prisma.modelWithUniqueDate.createMany({data: [
    { date: '2011-01-01T00:00:00Z' },
    { date: '2022-02-02T00:00:00Z' },
  ] })

  const getRowA = () => 
    prisma.modelWithUniqueDate.findUnique({ where: { date: '2011-01-01T00:00:00Z' } })

  const getRowB = () =>  
    prisma.modelWithUniqueDate.findUnique({ where: { date: '2022-02-02T00:00:00Z' } })

  const rowA = await getRowA()

  const rowB = await getRowB()

  const rowList = await Promise.all([ getRowA(), getRowB() ])
  
  console.log({ rowA, rowB, rowList })

  if (rowA.id !== rowList[0]?.id || rowB.id !== rowList[1]?.id) {
    console.error(`Error: expected rowList to contain [rowA, rowB]`)
  }
}

main().catch((error) => console.error(error))
