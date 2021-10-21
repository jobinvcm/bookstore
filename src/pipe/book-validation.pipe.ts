import { ValidationPipe, ValidationPipeOptions } from '@nestjs/common';
import { ValidationError, Injectable } from '@nestjs/common';
import { Optional } from '@nestjs/common';

export interface BookValidationPipeOptions extends ValidationPipeOptions {
  customErrorMessageEnabled?: boolean;
  customErrorMessage?: string;
}

@Injectable()
export class BookValidationPipe extends ValidationPipe {
  protected customErrorMessageEnabled: boolean;
  protected customErrorMessage: string;

  constructor(@Optional() options?: BookValidationPipeOptions) {
    const { customErrorMessageEnabled, customErrorMessage, ...removedOptions } =
      options;
    super(removedOptions);

    this.customErrorMessageEnabled = customErrorMessageEnabled;
    this.customErrorMessage = customErrorMessage;
  }

  protected flattenValidationErrors(
    validationErrors: ValidationError[],
  ): string[] {
    if (this.customErrorMessageEnabled) {
      return [this.customErrorMessage];
    }

    return super.flattenValidationErrors(validationErrors);
  }
}
