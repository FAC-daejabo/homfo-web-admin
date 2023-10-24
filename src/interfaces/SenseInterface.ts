export interface ISense {
  senseId: number;
  writerName: string;
  title: string;
  likeCount: number;
  favoriteCount: number;
  isPublic: string;
  status: string;
  createdAt: string;
}

export interface ISenseDetail {
  imageList: FileList;
  title: string;
  content: string;
}
