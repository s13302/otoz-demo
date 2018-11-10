import { Injectable } from '@angular/core';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ActivityService {

  futureActivities = [{
    id: 0,
    dateTime: new Date(),
    participants: [{
      id: 1,
      username: "bgardolinski",
      name: "Bartłomiej",
      surname: "Gardoliński",
      email: "bgardolinski@otoz-animals.pl",
      phone: "604604604"
    }, {
      id: 2,
      username: "dciborowski",
      name: "Dominik",
      surname: "Ciborowski",
      email: "dciborowski@otoz-animals.pl",
      phone: "604604604"
    }, {
      id: 3,
      username: "rpodkonski",
      name: "Rafał",
      surname: "Podkoński",
      email: "rpodkonski@otoz-animals.pl",
      phone: "604604604"
    }],
    situationDescription: "Brak właścicieli zwierząt w trakcie interwencji. Interwencja przeprowadzona z asystą dwóch policjantów. Na miejscu zastano kilka kotów, które kręciły się po podwórku oraz 2 psy, które były na zbyt krótkim łańcuchy.",
    activities: "Sporządzono notatkę oraz wydano rekomendację dla właścicieli, która zostanie przekazana przez policjantów uczestniczących w interwencji.",
    recommendations: "Wydłużenie łańcucha dla psów.",
    usedResources: "Paliwo + Samochód",
    estimatedCost: 200.59,
    comments: "Zalecana rekontrola 20.12.2018"
  }, {
    id: 1,
    dateTime: new Date(),
    participants: [{
      id: 3,
      username: "rpodkonski",
      name: "Rafał",
      surname: "Podkoński",
      email: "rpodkonski@otoz-animals.pl",
      phone: "604604604"
    }],
    situationDescription: "Na miejscu okazało się, że zwierzęta mają dobre i godne warunki życia. Fałszywy alarm.",
    activities: "Sprawdzenie warunków życia zwierząt gospodarczych oraz domowych",
    recommendations: "",
    usedResources: "Paliwo + Samochód",
    estimatedCost: 67.88,
    comments: ""
  }, {
    id: 2,
    dateTime: new Date(),
    participants: [{
      id: 3,
      username: "rpodkonski",
      name: "Rafał",
      surname: "Podkoński",
      email: "rpodkonski@otoz-animals.pl",
      phone: "604604604"
    }],
    situationDescription: "Zwierzęta gospodarcze nie mają dostępu do bieżącej wody, wg. gospodarzy jest to spowodowane awarią.",
    activities: "Sprawdzenie warunków życia zwierząt gospodarczych",
    recommendations: "Zapewnienie dostępu do bieżącej wody dla zwierząt gospodarczych",
    usedResources: "Samochód + Paliwo",
    estimatedCost: 98.77,
    comments: "Zalecana rekontrola 13.12.2018"
  }];

  constructor() { }

  getFutureActivities() {
    return of(this.futureActivities);
  }

  getActivity(id: number) {
    if (id > -1 && id < this.futureActivities.length) {
      return of(this.futureActivities[id]);
    }
    return null;
  }

}
