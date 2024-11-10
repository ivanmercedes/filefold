<?php

namespace App\Filament\Resources;

use Closure;
use Filament\Forms;
use Filament\Tables;
use Filament\Forms\Set;
use App\Models\Category;
use Filament\Forms\Form;
use Filament\Tables\Table;
use Illuminate\Support\Str;
use Filament\Resources\Resource;
use Filament\Forms\Components\Toggle;
use Illuminate\Database\Eloquent\Builder;
use App\Filament\Resources\CategoryResource\Pages;
use Illuminate\Database\Eloquent\SoftDeletingScope;
use App\Filament\Resources\CategoryResource\RelationManagers;
use Filament\Forms\Components\Section;
use Filament\Forms\Get;

class CategoryResource extends Resource
{
    protected static ?string $model = Category::class;

    protected static ?string $label = 'grupo';

    protected static ?string $navigationIcon = 'heroicon-o-rectangle-stack';

    public static function form(Form $form): Form
    {
        return $form
            ->schema([
                Section::make('Información del Grupo')
                    ->columnSpan(2)
                    ->schema([
                        Forms\Components\TextInput::make('name')
                            ->required()
                            ->reactive()
                            ->live(onBlur: true)->afterStateUpdated(fn(Set $set, ?string $state) => $set('slug', Str::slug($state)))
                            ->maxLength(255),
                        Forms\Components\RichEditor::make('description')
                            ->nullable()
                            ->maxLength(255),
                        Forms\Components\TextInput::make('slug')
                            ->required()
                            ->rules(['alpha_dash'])
                            ->unique(ignoreRecord: true)
                            ->maxLength(255),

                        Forms\Components\Select::make('parent_id')
                            ->label('Grupo Padre')
                            ->relationship('parent', 'name'),

                        Toggle::make('is_custom_page')
                            ->onColor('success')
                            ->offColor('danger')
                            ->label('Usar como pagina')
                            ->live()
                            ->default(false),

                        Toggle::make('is_custom_url')
                            ->hidden(fn(Get $get): bool =>  $get('is_custom_page'))
                            ->onColor('success')
                            ->offColor('danger')
                            ->label('Usar URL Custom')
                            ->live()
                            ->default(false),
                    ]),


                Section::make('URL Custom')
                    ->columnSpan(2)
                    ->hidden(fn(Get $get): bool => ! $get('is_custom_url'))
                    ->description('URL personalizada para el Grupo')
                    ->schema([
                        Forms\Components\TextInput::make('Url Custom')
                            ->required()
                            ->maxLength(255),
                        Forms\Components\Checkbox::make('target_blank')
                            ->label('Abrir en una nueva pestaña')
                    ])


            ]);
    }

    public static function table(Table $table): Table
    {
        return $table
            ->columns([
                Tables\Columns\TextColumn::make('name')
                    ->label('Nombre')
                    ->searchable(),
                Tables\Columns\TextColumn::make('parent.name')
                    ->label('Padre')
                    ->numeric()
                    ->sortable(),
                Tables\Columns\TextColumn::make('created_at')
                    ->label('Creado')
                    ->dateTime()
                    ->sortable()
                    ->toggleable(isToggledHiddenByDefault: true),
                Tables\Columns\TextColumn::make('updated_at')
                    ->label('Actualizado')
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
            'index' => Pages\ListCategories::route('/'),
            'create' => Pages\CreateCategory::route('/create'),
            'edit' => Pages\EditCategory::route('/{record}/edit'),
        ];
    }
}
