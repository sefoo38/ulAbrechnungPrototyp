import { NumberSymbol } from '@angular/common';
import { Injectable } from '@angular/core';

interface PaymentEntry {
  id: number;
  description: string;
  trainer: number;
  department: number;
  function: number;
  role: number;
  location: number;
  date: string;
  dateRange: string;
  flatrate: number;
  hourRate: number;
  expenses: number;
  distance: number;
  notes: string;
  confirmer: number;
  confirmed: boolean;
  approver: number;
  approved: boolean;
};

interface Function {
  id: number;
  name: string;
};

interface Role {
  id: number;
  name: string;
}

interface Flatrate {
  id: number;
  name: string;
  value: number;
};

interface Hourrate {
  id: number;
  name: string;
  value: number;
}

interface Location {
  id: number;
  description: string;
  color: string;
  street: string;
  city: string;
  zipCode: number;
};

interface Abteilungsleiter {
  id: number;
  name: string;
}

interface Trainer {
  id: number;
  name: string;
  individualFlatrates: {
    description: string;
    value: number;
  }[];
  individualHourRate: number;
};

interface Department {
  id: number;
  name: string;
  color: string;
  roles: number[];
  abteilungsleiter: number[];
  assignedTrainers: number[];
  assignedLocations: number[];
  functions: number[];
  formSettings: number;
  departmentHourRate: number;
  departmentFlatrates: number[];
  entries: number[];
};

interface formSettings {

};


@Injectable({
  providedIn: 'root'
})
export class StorageService {

  functions = [
    {
      id: 1,
      name: 'Trainer'
    },
    {
      id: 2,
      name: 'Co-Trainer'
    },
    {
      id: 3,
      name: 'Schiedsrichter'
    },
    {
      id: 4,
      name: 'Aufbauen'
    },
    {
      id: 5,
      name: 'Abbauen'
    },
  ];

  roles = [
    {
      id: 1,
      name: 'Übungsleiter'
    },
    {
      id: 2,
      name: 'Trainer'
    },
    {
      id: 3,
      name: 'Helferstunden'
    },
  ];

  flatrates = [
    {
      id: 1,
      name: 'Anfahrtspauschale',
      value: 10,
    },
    {
      id: 2,
      name: 'Antrittspauschale',
      value: 5,
    },
    {
      id: 3,
      name: 'Schlechtwetterpauschale',
      value: 5,
    },
  ];

  hourrates = [
    {
      id: 1,
      name: 'Fussballtrainer',
      value: 8,
    },
    {
      id: 2,
      name: 'Handballtrainer',
      value: 6,
    },
    {
      id: 3,
      name: 'Hilfstrainer',
      value: 5,
    }
  ];

  locations = [
    {
      id: 1,
      description: 'Sportplatz 1',
      color: '#27ae60',
      street: 'Musterstr. 1',
      city: 'Musterstadt',
      zipCode: 12345
    },
    {
      id: 2,
      description: 'Sportplatz 3',
      color: '#16a085',
      street: 'Musterstr. 7',
      city: 'Musterstadt',
      zipCode: 12345
    },
    {
      id: 3,
      description: 'Sporthalle klein',
      color: '#16a085',
      street: 'Musterstr. 34',
      city: 'Musterstadt',
      zipCode: 12345
    }
  ];

  abteilungsleiter = [
    {
      id: 1,
      name: 'Werner König'
    },
    {
      id: 2,
      name: 'Stefan Stadler'
    },
    {
      id: 3,
      name: 'Dirk Dinger'
    },
  ];

  trainer = [
    {
      id: 1,
      name: 'Sefa Simsek',
      individualFlatrates: [
        {
          description: 'Antrittspauschale',
          value: 8,
        },
        {
          description: 'Fahrkostenpauschale',
          value: 15,
        },
      ],
      individualHourRate: 12,
    }
  ];

  departments = [
    {
      id: 1,
      name: 'Fussball Herren',
      color: '#27ae60',
      roles: [1, 3],
      abteilungsleiter: [2, 3],
      assignedTrainers: [1],
      assignedLocations: [2, 3],
      functions: [1, 3, 4],
      formSettings: 1,
      departmentHourRate: 1,
      departmentFlatrates: [1, 3],
      entries: [2, 3],
    },
    {
      id: 2,
      name: 'Handball Jugend',
      color: '#2980b9',
      roles: [1, 3],
      abteilungsleiter: [2, 3],
      assignedTrainers: ['Sefa Simsek', 'Max Mustermann'],
      assignedLocations: ['Sporthalle'],
      functions: [1, 3, 4],
      formSettings: 1,
      departmentHourRate: 1,
      departmentFlatrates: [1, 3],
      entries: [2, 3],
    },
    {
      id: 3,
      name: 'Gymnastik',
      color: '#8e44ad',
      roles: [1, 3],
      abteilungsleiter: [2, 3],
      assignedTrainers: [1],
      assignedLocations: ['Spiegelzimmer', ],
      functions: [1, 3, 4],
      formSettings: 1,
      departmentHourRate: 1,
      departmentFlatrates: [1, 3],
      entries: [2, 3],
    },

  ];

  entries = [
    {
      id: 1,
      description: 'Training Zumba',
      trainer: 'Stefan Stadler',
      role: 'Trainer',
      department: 'Gymnastik',
      function: 'Übungsleiter',
      location: 'Spiegelzimmer',
      date: '14.06.2022',
      dateRange: '',
      flatrate: 0,
      hourRate: 18,
      expenses: 0,
      distance: 0,
      notes: '',
      confirmer: 1,
      confirmed: '#EE5A24',
      approver: 3,
      approved: false,
    },
    {
      id: 2,
      description: 'Training Basketball',
      trainer: 'Werner König',
      department: 'Handball Jugend',
      role: 'Co-Trainer',
      function: 'Übungsleiter',
      location: 'Sporthalle',
      date: '17.06.2022',
      dateRange: '',
      flatrate: 0,
      hourRate: 15,
      expenses: 0,
      distance: 0,
      notes: '',
      confirmer: 1,
      confirmed: '#009432',
      approver: 3,
      approved: false,
    },
    {
      id: 3,
      description: 'Training Fussball',
      trainer: 'Sefa Simsek',
      department: 'Fussball Herren',
      role: 'Trainer',
      function: 'Trainer',
      location: 'Sportplatz 2',
      date: '18.06.2022',
      dateRange: '',
      hourRate: 12,
      expenses: 5,
      flatrate: 15,
      distance: 0,
      notes: '',
      confirmer: 1,
      confirmed: '#1289A7',
      approver: 3,
      approved: true,
    },
    {
      id: 4,
      description: 'Training Basketball',
      trainer: 'Werner König',
      department: 'Handball Jugend',
      role: 'Co-Trainer',
      function: 'Übungsleiter',
      location: 'Sporthalle',
      date: '20.06.2022',
      dateRange: '',
      flatrate: 0,
      hourRate: 15,
      expenses: 0,
      distance: 0,
      notes: '',
      confirmer: 1,
      confirmed: '#EE5A24',
      approver: 3,
      approved: false,
    },
    {
      id: 5,
      description: 'Training Zumba',
      trainer: 'Stefan Stadler',
      role: 'Trainer',
      department: 'Gymnastik',
      function: 'Übungsleiter',
      location: 'Spiegelzimmer',
      date: '21.06.2022',
      dateRange: '',
      flatrate: 0,
      hourRate: 18,
      expenses: 0,
      distance: 0,
      notes: '',
      confirmer: 1,
      confirmed: '#1289A7',
      approver: 3,
      approved: false,
    },
    {
      id: 6,
      description: 'Training Fussball',
      trainer: 'Sefa Simsek',
      department: 'Fussball Herren',
      role: 'Trainer',
      function: 'Trainer',
      location: 'Sportplatz 2',
      date: '24.06.2022',
      dateRange: '',
      hourRate: 12,
      expenses: 5,
      flatrate: 15,
      distance: 0,
      notes: '',
      confirmer: 1,
      confirmed: '#1289A7',
      approver: 3,
      approved: true,
    },
    {
      id: 7,
      description: 'Training Fussball',
      trainer: 'Sefa Simsek',
      department: 'Fussball Herren',
      role: 'Trainer',
      function: 'Trainer',
      location: 'Sportplatz 2',
      date: '27.06.2022',
      dateRange: '',
      hourRate: 12,
      expenses: 5,
      flatrate: 15,
      distance: 0,
      notes: '',
      confirmer: 1,
      confirmed: '#009432',
      approver: 3,
      approved: true,
    },
  ];



  constructor() { }

  getMaxId (name: any[]) {
    const arr = name;
    const id = arr.map(object => {
      return object.id;
    });
    const max = Math.max(...id);

    return max;
  };

  getEntries() {
    return this.entries;
  };


  getFunctions(id: number): any {
    return this.functions[id].name;
  };

  getDepartments() {
    return this.departments;
  }

  getTrainer(id: number): any {
    return this.trainer[id]
  }

  getAbteilungsleiter(id: number): any {
    return this.abteilungsleiter[id].name
  }

  getLocations(id: number): any {
    return this.locations[id]
  }

  getHourrates(id: number): any {
    return this.hourrates[id]
  }

  getFlatrates(id: number): any{
    return this.flatrates[id]
  }

  getRoles(id: number): any{
    return this.roles[id].name
  }


}


