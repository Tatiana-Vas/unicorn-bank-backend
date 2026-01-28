import { Body, Controller, Get, Param, Post, Query, UseGuards } from '@nestjs/common';
import { FinancialService } from './financial.service';
import { CreateAccountDto, CreateTransactionDto, GetAccountDto, GetTransactionsDto } from './dto/financial.dto';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';
import { RolesGuard } from '../auth/guards/roles.guard';
import { Roles } from '../auth/decorators/roles.decorator';
import { UserRole } from '../auth/enums/user-role.enum';

@Controller('api/financial')
@UseGuards(JwtAuthGuard, RolesGuard)
export class FinancialController {
  constructor(private readonly financialService: FinancialService) {}

  @Post('account')
  @Roles(UserRole.PARENT)
  async createAccount(@Body() createAccountDto: CreateAccountDto) {
    return this.financialService.createAccount(createAccountDto);
  }

  @Post('transaction')
  @Roles(UserRole.PARENT)
  async createTransaction(@Body() createTransactionDto: CreateTransactionDto) {
    return this.financialService.createTransaction(createTransactionDto);
  }

  @Get('account/:accountId')
  @Roles(UserRole.PARENT, UserRole.CHILD)
  async getAccount(@Param() getAccountDto: GetAccountDto) {
    return this.financialService.getAccount(getAccountDto);
  }

  @Get('transactions/:accountId')
  @Roles(UserRole.PARENT, UserRole.CHILD)
  async getTransactions(@Param() getTransactionsDto: GetTransactionsDto) {
    return this.financialService.getTransactions(getTransactionsDto);
  }

  @Get('balance/:accountId')
  @Roles(UserRole.PARENT, UserRole.CHILD)
  async getAccountBalance(@Param('accountId') accountId: string) {
    return this.financialService.getAccountBalance(accountId);
  }

  @Get('accounts/child/:childId')
  @Roles(UserRole.PARENT)
  async getAccountsByChildId(@Param('childId') childId: string) {
    return this.financialService.getAccountsByChildId(childId);
  }

  @Get('accounts/parent/:parentId')
  @Roles(UserRole.PARENT)
  async getAccountsByParentId(@Param('parentId') parentId: string) {
    return this.financialService.getAccountsByParentId(parentId);
  }
}