import { IAttachmentMapper } from '@ticketing/attachment/types';
import { ZendeskAttachmentInput, ZendeskAttachmentOutput } from './types';
import {
  UnifiedAttachmentInput,
  UnifiedAttachmentOutput,
} from '@ticketing/attachment/types/model.unified';

export class ZendeskAttachmentMapper implements IAttachmentMapper {
  desunify(
    source: UnifiedAttachmentInput,
    customFieldMappings?: {
      slug: string;
      remote_id: string;
    }[],
  ): ZendeskAttachmentInput {
    return;
  }

  unify(
    source: ZendeskAttachmentOutput | ZendeskAttachmentOutput[],
    customFieldMappings?: {
      slug: string;
      remote_id: string;
    }[],
  ): UnifiedAttachmentOutput | UnifiedAttachmentOutput[] {
    if (!Array.isArray(source)) {
      return this.mapSingleAttachmentToUnified(source, customFieldMappings);
    }
    return source.map((ticket) =>
      this.mapSingleAttachmentToUnified(ticket, customFieldMappings),
    );
  }

  private mapSingleAttachmentToUnified(
    ticket: ZendeskAttachmentOutput,
    customFieldMappings?: {
      slug: string;
      remote_id: string;
    }[],
  ): UnifiedAttachmentOutput {
    return;
  }
}
