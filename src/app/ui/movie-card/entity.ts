export class movieDetail{
  imdbID: number;
  Title: string;
  Type: string;
  Year:string;
  Poster:string;
}
export class movieCard{
  page:number=1;
  total_pages:number;
  Search:Array<movieDetail>
}
