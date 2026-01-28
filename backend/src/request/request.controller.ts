import { Controller, Get, Post, Body, Param, Query } from '@nestjs/common';
import { RequestService } from './request.service';
import { 
  CreateRequestDto, 
  GetRequestsDto, 
  RespondToRequestDto,
  NewTaskRequestDto,
  WishlistPurchaseRequestDto,
  MoneyWithdrawRequestDto,
  NewDepositRequestDto 
} from './dto/request.dto';

@Controller('requests')
export class RequestController {
  constructor(private readonly requestService: RequestService) {}

  @Post()
  async createRequest(@Body() createRequestDto: CreateRequestDto) {
    return this.requestService.createRequest(createRequestDto);
  }

  @Get(':id')
  async getRequestById(@Param('id') requestId: string) {
    return this.requestService.getRequestById(requestId);
  }

  @Get()
  async getRequests(@Query() query: GetRequestsDto) {
    return this.requestService.getRequests(query);
  }

  @Get('parent/:parentId')
  async getRequestsForParent(@Param('parentId') parentId: string) {
    return this.requestService.getRequestsForParent(parentId);
  }

  @Post(':id/respond')
  async respondToRequest(@Param('id') requestId: string, @Body() respondDto: RespondToRequestDto) {
    return this.requestService.respondToRequest({
      ...respondDto,
      requestId,
    });
  }

  // Specific endpoints for different request types
  @Post('task-request')
  async createTaskRequest(@Body() data: { childId: string } & NewTaskRequestDto) {
    return this.requestService.createTaskRequest(data.childId, data);
  }

  @Post('wishlist-purchase-request')
  async createWishlistPurchaseRequest(@Body() data: { childId: string } & WishlistPurchaseRequestDto) {
    return this.requestService.createWishlistPurchaseRequest(data.childId, data);
  }

  @Post('money-withdraw-request')
  async createMoneyWithdrawRequest(@Body() data: { childId: string } & MoneyWithdrawRequestDto) {
    return this.requestService.createMoneyWithdrawRequest(data.childId, data);
  }

  @Post('new-deposit-request')
  async createNewDepositRequest(@Body() data: { childId: string } & NewDepositRequestDto) {
    return this.requestService.createNewDepositRequest(data.childId, data);
  }
}