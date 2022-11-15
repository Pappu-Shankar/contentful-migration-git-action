module.exports = function () {};

// @ts-check
/** @type import('contentful-migration').MigrationFunction */
// module.exports = function (migration) {
// 	const navItem = migration
// 		.createContentType('navItem')
// 		.name('NavItem')
// 		.displayField('name');

// 	navItem.createField('name').type('Symbol').name('Name').required(true);
// 	navItem.createField('url').type('Symbol').name('url');

// 	navItem.createField('childrens', {
// 		name: 'Childrens',
// 		type: 'Array',
// 		items: {
// 			type: 'Link',
// 			validations: [],
// 			linkType: 'Entry',
// 		},
// 	});

// 	const navHeader = migration
// 		.createContentType('navigationHeader')
// 		.name('NavHeader')
// 		.displayField('title');

// 	navHeader.createField('title').type('Symbol').name('Title').required(true);
// 	navHeader.createField('logo').type('Link').name('Logo').linkType('Asset');
// 	navHeader.createField('navItems', {
// 		name: 'NavItems',
// 		type: 'Array',
// 		items: {
// 			type: 'Link',
// 			validations: [],
// 			linkType: 'Entry',
// 		},
// 	});
// 	navHeader.createField('allowShoppingCart').type('Boolean').name('AllowShoppingCart');
// 	navHeader.createField('allowSearch').type('Boolean').name('AllowSearch');

	
// };
