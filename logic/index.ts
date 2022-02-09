export const convertDate = (date: string) => {
  const temp = new Date(date)
  return `${temp.getDate()}:${temp.getMonth()}:${temp.getFullYear()}`
}
export const cal_brands = (data: any) => {
  let brands: string[] = []
  data.map((item: any) => {
    if (brands.indexOf(item.brand_name) === -1) {
      brands.push(item.brand_name)
    }
  })
  return brands
}
