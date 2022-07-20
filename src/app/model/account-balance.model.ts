export interface AccountBalance{
    GetVendAcctBal: {
      Flag: string,
      VendorNum_CompanyCode: { 
        item: {
          VendorNum: number,
          CompanyCode: number
        }
      },
      Period: number,
      Date: number
    }
}