import { User, userData } from './../../userData';
import { Component, Inject, OnInit, TemplateRef } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { TuiAlertService, TuiDialogContext, TuiDialogService } from '@taiga-ui/core';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {

  constructor(private formBuilder: FormBuilder, @Inject(TuiAlertService) private alertService: TuiAlertService,
  @Inject(TuiDialogService) private dialogService: TuiDialogService) { }

  createForm: FormGroup = this.formBuilder.group({
    username: ['', Validators.required],
    email: ['', Validators.required],
    password: ['', Validators.required],
    full_name: ['', Validators.required],
    address: ['', Validators.required],
    phone_number: ['', Validators.required]
  });

  editForm: FormGroup = this.formBuilder.group({
    username: ['', Validators.required],
    email: ['', Validators.required],
    password: ['', Validators.required],
    full_name: ['', Validators.required],
    address: ['', Validators.required],
    phone_number: ['', Validators.required]
  });

  searchField = new FormControl();

  // Select File Event
  fileControl = new FormControl();
  chooseImage = false;
  imageData!: File;
  // End Select File Event

  isLoadingData = false;
  isLoadingCreate = false;
  isLoadingEdit = false;
  isLoadingDelete = false;

  users: User[] = userData;
  selectedUser: User = {} as User;

  selectedUserPhoto = '';

  usersLength = userData.length;

  // Subscription
  openCreate$!: Subscription;
  openEdit$!: Subscription;
  openDelete$!: Subscription;

  ngOnInit(): void {
  }

  selectFile(): void {
    this.chooseImage = true;
    this.imageData = this.fileControl.value;
  }

  openCreateDialog(content: TemplateRef<TuiDialogContext>): void {
    this.openCreate$ = this.dialogService.open(content, {
      label: 'Create User Data',
      dismissible: false,
      closeable: false
    }).subscribe();
  }

  closeCreateDialog(): void {
    this.openCreate$.unsubscribe();
  }

  openEditDialog(content: TemplateRef<TuiDialogContext>): void {
    this.openEdit$ = this.dialogService.open(content, {
      label: 'Edit Data Users',
      dismissible: false,
      closeable: false
    }).subscribe();
  }

  closeEditDialog(): void {
    this.openEdit$.unsubscribe();
  }

  openDeleteDialog(content: TemplateRef<TuiDialogContext>): void {

  }

  closeDeleteDialog(): void {

  }

  openDetailPhotoDialog(content: TemplateRef<TuiDialogContext>, photo: string): void {
    this.selectedUserPhoto = photo;
    this.dialogService.open(content, { size: 'auto' }).subscribe();
  }

  search(index: number = 0): void {

  }

  submitCreateForm(): void {

  }

  submitEditForm(): void {

  }

  deleteUsers(): void {

  }

}
