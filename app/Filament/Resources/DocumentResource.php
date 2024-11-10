<?php

namespace App\Filament\Resources;

use Filament\Forms;
use Filament\Tables;
use App\Models\Document;
use Filament\Forms\Form;
use Filament\Tables\Table;
use Filament\Resources\Resource;
use App\Enums\DocumentStatusEnum;
use Filament\Forms\Components\Select;
use Illuminate\Database\Eloquent\Model;
use Filament\Forms\Components\FileUpload;
use App\Filament\Resources\DocumentResource\Pages;
use Illuminate\Database\Eloquent\SoftDeletingScope;
use App\Filament\Resources\DocumentResource\RelationManagers;
use Filament\Forms\Components\Repeater;

class DocumentResource extends Resource
{
    protected static ?string $model = Document::class;

    protected static ?string $label = 'documento';

    protected static ?string $navigationIcon = 'heroicon-o-document';

    public static function form(Form $form): Form
    {
        return $form
            ->schema([
                Forms\Components\Group::make()
                    ->schema([
                        Forms\Components\Section::make()
                            ->schema([
                                Forms\Components\Select::make('category_id')
                                    ->label('Categoria')
                                    ->required()
                                    ->relationship('category', 'name')
                                    ->getOptionLabelFromRecordUsing(fn(Model $record) => "{$record->name}")
                                    ->preload(true)
                                    ->searchable(['name']),
                                Forms\Components\TextInput::make('name')
                                    ->label('Nombre')
                                    ->required()
                                    ->maxLength(255),
                                Forms\Components\MarkdownEditor::make('description')
                                    ->label('Descripción')
                                    ->required()
                                    ->maxLength(255),



                            ]),
                        Forms\Components\Section::make('Archivos')
                            ->schema([
                                Repeater::make('attachment')
                                    ->schema([
                                        FileUpload::make('file')
                                            ->label(''),
                                    ])


                            ])
                            ->collapsible(),
                    ]),
                Forms\Components\Group::make()
                    ->schema([
                        Forms\Components\Section::make()
                            ->schema([
                                Forms\Components\Grid::make()
                                    ->columns(1)
                                    ->schema([
                                        Forms\Components\ToggleButtons::make('status')
                                            ->label('Estado')
                                            ->inline()
                                            ->options(DocumentStatusEnum::class)
                                            ->default(DocumentStatusEnum::Published)
                                            ->required(),
                                        Select::make('type')
                                            ->label('Tipo')
                                            ->options([
                                                'document' => 'Documento',
                                                'notice' => 'Aviso',
                                            ])
                                            ->default('document'),
                                        Forms\Components\DatePicker::make('date')
                                            ->label('Fecha custom'),
                                    ])
                            ])
                    ]),
            ]);
    }

    public static function table(Table $table): Table
    {
        return $table
            ->columns([
                Tables\Columns\TextColumn::make('name')
                    ->label('Nombre')
                    ->searchable(),
                Tables\Columns\TextColumn::make('status')
                    ->label('Estado'),
                Tables\Columns\TextColumn::make('type')
                    ->label('Tipo')
                    ->searchable(),
                Tables\Columns\TextColumn::make('category.name')
                    ->label('Categoria')
                    ->numeric()
                    ->sortable(),
                Tables\Columns\TextColumn::make('created_at')
                    ->dateTime()
                    ->sortable()
                    ->toggleable(isToggledHiddenByDefault: true),
                Tables\Columns\TextColumn::make('updated_at')
                    ->dateTime()
                    ->sortable()
                    ->toggleable(isToggledHiddenByDefault: true),
            ])
            ->filters([
                //
            ])
            ->actions([
                Tables\Actions\EditAction::make(),
            ])
            ->bulkActions([
                Tables\Actions\BulkActionGroup::make([
                    Tables\Actions\DeleteBulkAction::make(),
                ]),
            ]);
    }

    public static function getRelations(): array
    {
        return [
            //
        ];
    }

    public static function getPages(): array
    {
        return [
            'index' => Pages\ListDocuments::route('/'),
            'create' => Pages\CreateDocument::route('/create'),
            'edit' => Pages\EditDocument::route('/{record}/edit'),
        ];
    }
}
