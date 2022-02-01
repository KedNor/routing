import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from '../interface/user';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss'],
})
export class UsersComponent implements OnInit {
  public users: User[] = [
    {
      id: 1,
      name: 'Saitama',
    },
    {
      id: 2,
      name: 'Goku',
    },
    {
      id: 3,
      name: 'Garou',
    },
  ];
  constructor(private router: Router, private activatedRoute: ActivatedRoute) {}

  ngOnInit(): void {}

  redirection(user: User) {
    this.router.navigate([user.id], {
      relativeTo: this.activatedRoute,
      queryParams: {
        name: user.name,
      },
      queryParamsHandling: 'merge',
      fragment: 'foo',
    });
  }
}
