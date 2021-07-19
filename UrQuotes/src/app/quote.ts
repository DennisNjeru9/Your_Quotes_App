export class Quote {
  showAuthorAndSubmitter: boolean;
  constructor(public id: number, public quote: string, public author: string, public submitter: string){
    this.showAuthorAndSubmitter=false;
  }
}
