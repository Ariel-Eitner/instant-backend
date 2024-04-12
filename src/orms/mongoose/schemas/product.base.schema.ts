import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document } from "mongoose";

@Schema()
export class ProductBase {
  
    @Prop({required: false})
    averageRating?: number;
  
    @Prop({required: false})
    brand?: string;
  
    @Prop({required: false})
    category?: string;
  
    @Prop({required: false})
    colors?: string;
  
    @Prop({required: false})
    createdAt?: Date;
  
    @Prop({required: false})
    currency?: string;
  
    @Prop({required: false})
    depth?: number;
  
    @Prop({required: false})
    description?: string;
  
    @Prop({required: false})
    discountPrice?: number;
  
    @Prop({required: false})
    height?: number;
  
    @Prop({ unique: true, sparse: true, lowercase: true, required: false })
    id?: string;
  
    @Prop({required: false})
    images?: string;
  
    @Prop({required: false})
    isActive?: boolean;
  
    @Prop({required: false})
    mainImage?: string;
  
    @Prop({required: false})
    metaDescription?: string;
  
    @Prop({required: false})
    metaKeywords?: string;
  
    @Prop({required: false})
    metaTitle?: string;
  
    @Prop({required: false})
    name?: string;
  
    @Prop({required: false})
    price?: number;
  
    @Prop({required: false})
    releaseDate?: Date;
  
    @Prop({required: false})
    reviewCount?: number;
  
    @Prop({required: false})
    sizes?: string;
  
    @Prop({required: false})
    slug?: string;
  
    @Prop({required: false})
    sold?: number;
  
    @Prop({required: false})
    stock?: number;
  
    @Prop({required: false})
    subcategory?: string;
  
    @Prop({required: false})
    tags?: string;
  
    @Prop({required: false})
    updatedAt?: Date;
  
    @Prop({ unique: true, sparse: true, lowercase: true, required: false })
    videos?: string;
  
    @Prop({required: false})
    weight?: number;
  
    @Prop({ unique: true, sparse: true, lowercase: true, required: false })
    width?: number;
}

export type ProductBaseDocument = ProductBase & Document;
const ProductBaseSchema = SchemaFactory.createForClass(ProductBase);

ProductBaseSchema.pre("save", function(next) {
  if (this.isNew && true) {
    this.createdAt = new Date();
  }
  next();
});

ProductBaseSchema.pre("findOneAndUpdate", function(next) {
  if (true) {
    this.set({ updatedAt: new Date() });
  }
  next();
});


export { ProductBaseSchema };
