import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import {
	UploadEvent,
	UploadFile,
	FileSystemFileEntry,
	FileSystemDirectoryEntry
} from 'ngx-file-drop';

@Component({
	selector: 'app-upload',
	templateUrl: './upload.component.html',
	styleUrls: ['./upload.component.css']
})
export class UploadComponent implements OnInit {
	@Output() onCargar = new EventEmitter<any>();

	file: any;
	maxFileSize = 3; // megas
	constructor() { }

	ngOnInit() {
	}
	public files: UploadFile[] = [];

	public dropped(event: UploadEvent) {
		this.files = event.files;
		for (const droppedFile of event.files) {

			// Is it a file?
			if (droppedFile.fileEntry.isFile) {
				const fileEntry = droppedFile.fileEntry as FileSystemFileEntry;
				fileEntry.file(async (file: File) => {

					if (!this.validateFile(file)) {
						alert("Error en la imagen!");
						this.file = null;
						return;
					}
					// console.log(formData)
					const formData = new FormData()
					formData.append('logo', file, droppedFile.relativePath)
					this.file = await this.getBase64(file);
					let aux = this.file.imageAsBase64;
					this.file.imageAsBase64 = aux.slice(aux.indexOf(',') + 1, aux.length)

					this.onCargar.emit(this.file);

				});
			} else {
				this.onCargar.emit(null);
				// It was a directory (empty directories are added, otherwise only files)
				// const fileEntry = droppedFile.fileEntry as FileSystemDirectoryEntry;
				// console.log(droppedFile.relativePath, fileEntry);
			}
		}
	}

	public fileOver(event) {
		// console.log(event);
	}

	public fileLeave(event) {
		// console.log(event);
	}

	validateFile (file) {
		return this.validateFileSize(file.size) && this.validateFileType(file.type);
	}
	validateFileType(type): boolean {
		
		if (typeof type !== 'string') return false;
		return type.substring(0, type.indexOf('/')).toLowerCase() === "image";
	}

	validateFileSize(size, megas = this.maxFileSize): boolean {
		
		return size < megas * 1000000;
	}
	getBase64(file) {
		return new Promise((resolve, reject) => {
			var reader = new FileReader();
			reader.readAsDataURL(file);
			reader.onload = function () {
				// console.log(reader);
				return resolve({
					name: '',
					imageAsBase64: reader.result
				});
			};
			reader.onerror = function (error) {
				// console.log('Error: ', error);
				return reject({
					error: '1',
					txt: error
				})
			};
		});

	}
}
