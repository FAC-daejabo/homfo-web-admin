export interface ISense {
  senseId: number;
  writerName: string;
  title: string;
  content: string;
  likeCount: number;
  favoriteCount: number;
  images: string[];
  bannerImage: string;
  status: string;
  isPublic: string;
  createdAt: string;
}

export interface ISenseDetail {
  imageList: FileList;
  title: string;
  content: string;
}
