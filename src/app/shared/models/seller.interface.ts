
export interface Iseller {
    id: string;
    itemName: string;
    description: string;
    startingBid: number;
    currentBid: number;
    status: SellerStatus;
    endTime: string;
}

export enum SellerStatus {
    "active","finalized","cancelled"
}