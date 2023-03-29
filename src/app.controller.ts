import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { AppService } from './app.service';
import { CreateAppDto } from './dto/create-app.dto';
import { UpdateAppDto } from './dto/update-app.dto';
import { AccountDTO } from './dto/account.dto';
import { OwnerDTO } from './dto/owner.dto';

@Controller('app')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Post()
  create(@Body() createAppDto: CreateAppDto) {
    return this.appService.create(createAppDto);
  }

  @Get()
  findAll() {
    return this.appService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.appService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateAppDto: UpdateAppDto) {
    return this.appService.update(+id, updateAppDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.appService.remove(+id);
  }

  @Post('/transfer/:sourceId/:targetId')
  async transfer(@Param('sourceId') @Param('targetId') targetId: AccountDTO,sourceId: AccountDTO){
    


  }

     
  

}
