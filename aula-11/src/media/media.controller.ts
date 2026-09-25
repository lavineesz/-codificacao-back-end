import { Controller, Post, UseInterceptors, UploadedFile } from
'@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
@Controller('media')
export class MediaController {
@Post('upload')
@UseInterceptors(
FileInterceptor('file')
)
uploadFile(@UploadedFile() file: any) {
  return {
    filename: file.originalname,
    size: file.size,
  };
}
}